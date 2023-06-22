import styled from "styled-components";
import Button from "components/atomics/buttons/Button";

export const Container = styled.div``;

export const SignOutButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(4, 12)};
`;
