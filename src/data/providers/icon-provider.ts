import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faCode, faCommentAlt, faFilm, faFolderOpen, faHome, faUsers } from "@fortawesome/pro-duotone-svg-icons";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { faArrowRightFromBracket, faArrowRightToArc, faBars, faCog, faEllipsis, faFile, faGrid2, faPencil, faSearch, faShare, faTimes, faTrash } from "@fortawesome/pro-regular-svg-icons";
import { faApple, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

library.add(
	faHome, 
	faCode, 
	faFolderOpen, 
	faFilm, 
	faBookOpen, 
	faUsers, 
	faCommentAlt, 
	faPlus, 
	faEllipsis, 
	faTimes, 
	faTrash, 
	faFile, 
	faArrowRightToArc, 
	faArrowRightFromBracket, 
	faCog, 
	faApple as IconDefinition, 
	faGoogle as IconDefinition, 
	faMicrosoft as IconDefinition, 
	faPencil, 
	faGrid2, 
	faBars, 
	faSearch, 
	faShare
);