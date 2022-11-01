import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDownToLine, faBan, faBookOpen, faCheck, faChevronRight, faCode, faCommentAlt, faFileImport, faFilm, faFolderOpen, faHome, faLink, faUsers } from "@fortawesome/pro-regular-svg-icons";
import { faCheckCircle, faPlay, faPlus, faRepeat, faSquare, faVolume, faVolumeXmark } from "@fortawesome/pro-solid-svg-icons";
import { faArrowRightFromBracket, faArrowRightToArc, faBars, faCog, faEllipsis, faFile, faGrid2, faPencil, faSave, faSearch, faShare, faTimes, faTrash, faHome as farHome, faFolderOpen as farFolderOpen, faFilm as farFilm, faUsers as farUsers, faBooks, faBookOpen as farBookOpen, faPuzzlePiece } from "@fortawesome/pro-regular-svg-icons";
import { faApple, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

// Import CSS Icons 
import "@fortawesome/fontawesome-pro/css/all.min.css";

// Import SVG Icons
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
	faShare,
	faPlay,
	faSquare,
	faSave,
	farHome,
	farFolderOpen,
	farFilm,
	farUsers,
	faCheckCircle,
	faBooks,
	farBookOpen,
	faPuzzlePiece,
	faChevronRight,
	faFileImport,
	faLink,
	faBan,
	faCheck,
	faArrowDownToLine,
	faRepeat,
	faVolume,
	faVolumeXmark
);