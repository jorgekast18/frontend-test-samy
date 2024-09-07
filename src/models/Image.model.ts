export interface Image {
    id: string;
    main_attachment: {
      small: string,
      big: string
    },
    description: string;
    liked: boolean;
  }