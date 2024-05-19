import ListsExercise from "./ListsExercise";
import TableExercise from "./TableExercise";
import ImageExerices from "./ImageExercise";
import FormExercise from "./FormExercise";
import AnchorExercise from "./AnchorExercise";



export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <div id="wd-p-tag">
            <h4>Paragraph Tags</h4>
                <p id="wd-p-1">
                This is the first paragraph. The paragraph tag is used to 
                format vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-2">
                This is the second paragraph. Even though there is a deliberate white gap 
                between the paragraph above and this paragraph, by default browsers 
                render them as one contiguous piece of text as shown here on the right.
                </p>
                <p id="wd-p-3">
                This is the third paragraph. Wrap each paragraph
                with the paragraph tag to tell browsers to render the gaps.
                </p>
        </div>

        <ListsExercise />
        <TableExercise />
        <ImageExerices />
        <FormExercise />
        <AnchorExercise />
      </div>
    );
  }