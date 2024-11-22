export const ELLIPSI_LEFT = -1;
export const ELLIPSI_RIGHT = -2;

export const generatePages = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }).map((_, index) => index + 1);
  }

  if (currentPage < 3) {
    return [1, 2, 3, ELLIPSI_LEFT, totalPages - 1, totalPages];
  }

  if (currentPage > totalPages - 2) {
    return [1, 2, 3, ELLIPSI_LEFT, totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    ELLIPSI_LEFT,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    ELLIPSI_RIGHT,
    totalPages,
  ];
};
