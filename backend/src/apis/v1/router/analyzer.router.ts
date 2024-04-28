import { Router } from "express";
import { countWord} from "../controller/analyzer/countWords.controller";
import { countCharacters } from "../controller/analyzer/countCharacters.controller";
import { countSentence } from "../controller/analyzer/countSentence.controller";
import { countParagraph } from "../controller/analyzer/countParagraph.controller";
import { longestWord } from "../controller/analyzer/longestWord.controller";

const router = Router();

router.post("/count-word", countWord)
router.post("/count-character", countCharacters)
router.post("/count-sentence", countSentence)
router.post("/count-paragraph", countParagraph)
router.post("/longest-word", longestWord)

export default router