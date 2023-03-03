import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <TextCard
        title="Super Note"
        subtitle="01/01/2022"
        content="Hello Hello "
        onClick={() => alert("OnClick!")}
        onClickTrash={() => alert("OnClickTrash")}
      />
    </>
  );
}
