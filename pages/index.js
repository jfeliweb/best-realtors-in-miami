import { MainMenu } from "./components/MainMenu";
import { BlockRenderer } from "./components/BlockRenderer";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default function Home(props) {
  console.log("PROPS: ", props);
  return (
    <div>
      <MainMenu
        items={props.mainMenuItems}
        callToActionDestination={props.callToActionDestination}
        callToActionLabel={props.callToActionLabel}
      />
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = getPageStaticProps;
