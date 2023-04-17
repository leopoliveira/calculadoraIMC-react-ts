import { Card } from "../Card/Card";

type Props = {
  imcResult: number;
};

function getCardProps(imcResult: number): [string, string, string, string] {
  const imagesPaths: { [key: string]: string } = {
    magreza: "./src/assets/images/down.png",
    normal: "./src/assets/images/up.png",
    sobrepeso: "./src/assets/images/down.png",
    obesidade: "./src/assets/images/down.png",
  };

  const colors: { [key: string]: string } = {
    magreza: "gray",
    normal: "green",
    sobrepeso: "orange",
    obesidade: "red",
  };

  const titles: { [key: string]: string } = {
    magreza: "Magreza",
    normal: "Normal",
    sobrepeso: "Sobrepeso",
    obesidade: "Obesidade",
  };

  const bodies: { [key: string]: string } = {
    magreza: "IMC está entre 0 e 18.5",
    normal: "IMC está entre 18.5 e 24.9",
    sobrepeso: "IMC está entre 24.9 e 30",
    obesidade: "IMC está entre 30 e 99",
  };

  if (imcResult >= 0 && imcResult <= 18.5) {
    return [
      imagesPaths.magreza,
      colors.magreza,
      titles.magreza,
      bodies.magreza,
    ];
  } else if (imcResult > 18.5 && imcResult <= 24.9) {
    return [imagesPaths.normal, colors.normal, titles.normal, bodies.normal];
  } else if (imcResult > 24.9 && imcResult <= 30) {
    return [
      imagesPaths.sobrepeso,
      colors.sobrepeso,
      titles.sobrepeso,
      bodies.sobrepeso,
    ];
  } else {
    return [
      imagesPaths.obesidade,
      colors.obesidade,
      titles.obesidade,
      bodies.obesidade,
    ];
  }
}

export const ImcResult = ({ imcResult }: Props) => {
  const CARD_PATH: number = 0;
  const CARD_COLOR: number = 1;
  const CARD_TITLE: number = 2;
  const CARD_BODY: number = 3;

  let cardProps = getCardProps(imcResult);

  return (
    <div>
      <img src="" />
      <Card
        imageSource={cardProps[CARD_PATH]}
        color={cardProps[CARD_COLOR]}
        title={cardProps[CARD_TITLE]}
        body={`Seu IMC é: ${imcResult.toFixed(1)}`}
        footer={cardProps[CARD_BODY]}
      />
    </div>
  );
};
