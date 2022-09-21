import { IconDefinition, library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faCode, faCommentAlt, faFilm, faFolderOpen, faHome, faUsers } from "@fortawesome/pro-duotone-svg-icons";
import { faPlay, faPlus, faSquare } from "@fortawesome/pro-solid-svg-icons";
import { faArrowRightFromBracket, faArrowRightToArc, faBars, faCog, faEllipsis, faFile, faGrid2, faPencil, faSave, faSearch, faShare, faTimes, faTrash, faHome as farHome, faFolderOpen as farFolderOpen, faFilm as farFilm, faUsers as farUsers } from "@fortawesome/pro-regular-svg-icons";
import { faApple, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

// Import CSS Icons 
import "@fortawesome/fontawesome-free/css/all.min.css";

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
	farUsers
);