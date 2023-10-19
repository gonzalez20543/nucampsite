import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};

// Find a campsite where the featured is equal to true
export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
