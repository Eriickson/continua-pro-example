declare module "@continuapro/entity" {
  interface GetCroppedImg {
    src: string;
    cropArea: CropArea;
    flip?: IFlip;
    rotation?: number;
  }

  interface Point {
    x: number;
    y: number;
  }
  interface CropArea {
    x: number;
    y: number;
    w: number;
    h: number;
  }
  interface GeneratedImage {
    id: string;
    originalSrc: string;
    src: string;
    file: File;
    originalFile: File;
    point: IPoint;
    rotation: number;
    zoom: number;
    flip: IFlip;
    cropArea: CropArea;
    aspectRatio: AspectRatioType;
  }

  interface Flip {
    v: boolean;
    h: boolean;
  }

  interface CropArea {
    x: number;
    y: number;
    w: number;
    h: number;
  }

  type AspectRatioType = "16:9" | "4:3" | "1:1";
}
