import { Box, Title, Subtitle, QrImage } from "./Card.styles";

import qrCode from "../images/image-qr-code.png";

const Card = () => {
  return (
    <Box>
      <QrImage src={qrCode} alt="qrCode" />
      <Title>Improve your front-end skills by building project</Title>
      <Subtitle>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </Subtitle>
    </Box>
  );
};

export default Card;
