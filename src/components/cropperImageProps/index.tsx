import React, { FC, useCallback, useState } from "react";

import _Cropper from "react-easy-crop";
import styled from "@emotion/styled";

import { colors } from "src/themes/color";
import { CropArea } from "@continuapro/entity";

const WrapperCropperImageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  @media (min-width: 768px) {
    height: 40rem;
  }
  .reactEasyCrop_Container {
    background-color: #c9c9c9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  }
  .reactEasyCrop_CropArea {
    border: 2px solid ${colors.secondary[500]};
  }
`;

interface CropperImageProps {
  src: string;
  setCroppedArea(croppedArea: CropArea): void;
}

// eslint-disable-next-line
export const CropperImageProps: FC<CropperImageProps> = ({ src, setCroppedArea }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedArea({
      x: croppedAreaPixels.x,
      y: croppedAreaPixels.y,
      w: croppedAreaPixels.width,
      h: croppedAreaPixels.height,
    });
  }, []);

  return (
    <WrapperCropperImageStyled>
      <_Cropper
        image={src}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        zoomSpeed={0.4}
      />
    </WrapperCropperImageStyled>
  );
};
