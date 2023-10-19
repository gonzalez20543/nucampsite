import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/allCampsitesSlice";
import { useState } from "react";

const CampsitesDirectoryPage = () => {
  const [campsiteId, setCampsiteId] = useState(0);
  const selectedCampsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
