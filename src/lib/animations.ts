import { keyframes } from "@emotion/react";

export const slideIn = keyframes`
from {
  transform: translateY(30px);
}
to {
  transform: translateY(0px);
}`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

export const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}`;
