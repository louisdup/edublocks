import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { FirestoreUtilities } from "@/utilities/firestore-utilities";
import { QueryDocumentSnapshot, CollectionReference, collection, orderBy, where, limit, QueryConstraint, Query, query } from "@firebase/firestore";
import { ClassroomAssignmentModel } from "../models/classroom-assignment-model";
import { ClassroomModel } from "../models/classroom-model";
import { ClassroomAssignmentSubmissionModel } from "../models/classroom-assignment-submission-model";
import { ClassroomUserModel } from "../models/classroom-user-model";
import { FirestoreFetchResponseModel } from "../models/firestore-fetch-response-model";
import { UserClassroomModel } from "../models/user-classroom-model";

// ----------------------------------------------------
// Provides data access functions for the classroom feature.
// ----------------------------------------------------

/**
 * Get a paged list of classrooms.
 */
export async function getClassroomsAsync(): Promise<Array<ClassroomModel>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `users/${AuthenticationUtilities.currentUser.value?.uid}/classrooms`);
	const collectionQuery: Query = query(collectionReference);
	const response: FirestoreFetchResponseModel<Array<UserClassroomModel>> = await FirestoreUtilities.fetchCollection(collectionQuery);
	const classrooms: Array<ClassroomModel> = [];
	
	if (response.wasSuccessful && response.data) {
		for await (const classroomEntry of response.data) {
			const classroomResponse: FirestoreFetchResponseModel<ClassroomModel> = await FirestoreUtilities.fetchDocument(`classroom/${classroomEntry.id}`);
			if (classroomResponse.wasSuccessful && classroomResponse.data) {
				classrooms.push(classroomResponse.data);
			}
		}
	}

	return classrooms;
}

/**
 * Get a single classroom.
 */
export async function getClassroomAsync(classroomId: string): Promise<FirestoreFetchResponseModel<ClassroomModel>> {
	return FirestoreUtilities.fetchDocument(`classroom/${classroomId}`);
}

/**
 * Delete a classroom.
 */
export async function deleteClassroomAsync(classroomId: string): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.deleteDocument(`classroom/${classroomId}`);
}

/**
 * Get a list of classroom users.
 */
export async function getClassroomUsersAsync(classroomId: string): Promise<FirestoreFetchResponseModel<Array<ClassroomUserModel>>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `classroom/${classroomId}/users`);
	const collectionQuery: Query = query(collectionReference);
	return FirestoreUtilities.fetchCollection(collectionQuery);
}

/**
 * Get a count of classroom users.
 */
export async function getClassroomUsersCountAsync(classroomId: string, userId: string): Promise<FirestoreFetchResponseModel<number>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `classroom/${classroomId}/users`);
	const constraints: Array<QueryConstraint> = [];

	if (userId) {
		constraints.push(where("uid", "==", userId));
	}

	const collectionQuery: Query = query(collectionReference, ...constraints);
	return FirestoreUtilities.getCollectionCount(collectionQuery);
}

/**
 * Create a classroom user.
 */
export async function createClassroomUserAsync(classroomId: string, userId: string, body: object): Promise<FirestoreFetchResponseModel<string>> {
	return FirestoreUtilities.createDocument(`classroom/${classroomId}/users`, body, userId);
}

/**
 * Delete a classroom user.
 */
export async function deleteClassroomUserAsync(classroomId: string, userId: string): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.deleteDocument(`classroom/${classroomId}/users/${userId}`);
}

/**
 * Get a paged list of classroom assignments.
 */
export async function getClassroomAssignmentsAsync(classroomId: string, assignmentsLimit: number, offset?: QueryDocumentSnapshot): Promise<FirestoreFetchResponseModel<Array<ClassroomAssignmentModel>>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `classroom/${classroomId}/assignments`);
	const constraints: Array<QueryConstraint> = [ orderBy("created", "desc"), limit(assignmentsLimit), ...FirestoreUtilities.offset(offset) ];
	const collectionQuery: Query = query(collectionReference, ...constraints);
	return FirestoreUtilities.fetchCollection(collectionQuery);
}

/**
 * Get a single assignment.
 */
export async function getAssignmentAsync(classroomId: string, assignmentId: string): Promise<FirestoreFetchResponseModel<ClassroomAssignmentModel>> {
	return FirestoreUtilities.fetchDocument(`classroom/${classroomId}/assignments/${assignmentId}`);
}

/**
 * Create an assignment.
 */
export async function createAssignmentAsync(classroomId: string, body: object): Promise<FirestoreFetchResponseModel<string>> {
	return FirestoreUtilities.createDocument(`classroom/${classroomId}/assignments`, body);
}

/**
 * Update an assignment.
 */
export async function updateAssignmentAsync(classroomId: string, assignmentId: string, body: object): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.updateDocument(`classroom/${classroomId}/assignments/${assignmentId}`, body);
}

/**
 * Delete an assignment.
 */
export async function deleteAssignmentAsync(classroomId: string, assignmentId: string): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.deleteDocument(`classroom/${classroomId}/assignments/${assignmentId}`);
}

/**
 * Get a list of assignment submissions.
 */
export async function getClassroomAssignmentSubmissionsAsync(classroomId: string, assignmentId: string): Promise<FirestoreFetchResponseModel<Array<ClassroomAssignmentSubmissionModel>>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `classroom/${classroomId}/assignments/${assignmentId}/submissions`);
	const collectionQuery: Query = query(collectionReference);
	return FirestoreUtilities.fetchCollection(collectionQuery);
}

/**
 * Get a single assignment submission.
 */
export async function getClassroomAssignmentSubmissionAsync(classroomId: string, assignmentId: string): Promise<FirestoreFetchResponseModel<ClassroomAssignmentSubmissionModel>> {
	return FirestoreUtilities.fetchDocument(`classroom/${classroomId}/assignments/${assignmentId}/submissions/${AuthenticationUtilities.currentUser.value?.uid}`);
}

/**
 * Get a count of submissions for a given assignment.
 */
export async function getClassroomAssignmentSubmissionsCountAsync(classroomId: string, assignmentId: string, userId?: string): Promise<FirestoreFetchResponseModel<number>> {
	const collectionReference: CollectionReference = collection(FirestoreUtilities.getFirestore(), `classroom/${classroomId}/assignments/${assignmentId}/submissions`);
	const constraints: Array<QueryConstraint> = [];

	if (userId) {
		constraints.push(where("uid", "==", userId));
	}

	const collectionQuery: Query = query(collectionReference, ...constraints);
	return FirestoreUtilities.getCollectionCount(collectionQuery);
}

/**
 * Create an assignment submission.
 */
export async function createAssignmentSubmissionAsync(classroomId: string, assignmentId: string, body: object): Promise<FirestoreFetchResponseModel<string>> {
	return FirestoreUtilities.createDocument(`classroom/${classroomId}/assignments/${assignmentId}/submissions`, body, AuthenticationUtilities.currentUser.value?.uid);
}

/**
 * Update an assignment submission.
 */
export async function updateAssignmentSubmissionAsync(classroomId: string, assignmentId: string, submissionId: string, body: object): Promise<FirestoreFetchResponseModel<void>> {
	return FirestoreUtilities.updateDocument(`classroom/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}`, body);
}