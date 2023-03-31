import { Cover } from "../Cover/index";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Columns } from "../Columns";
import { Column } from "../Column";
import Image from "next/image";
import { CallToActionButton } from "../CallToActionButton";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        // console.log("block: ", block);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            level={block.attributes.level}
            content={block.attributes.content}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        );
      }
      case "core/columns": {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        return (
          <Column key={block.id} width={block.attributes.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "core/image": {
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            alt={block.attributes.alt || ""}
            height={block.attributes.height}
            width={block.attributes.width}
          />
        );
      }
      case "core/group":
      case "core/block": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      default:
        {
          console.log("UNKNOW: ", block);
          return null;
        }
        return null;
    }
  });
};
