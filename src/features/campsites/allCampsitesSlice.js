import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

// Find a campsite where the featured is equal to true
export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};

// This part is added. Find by name
export const selectCampsiteByName = (name) => {
  return CAMPSITES.find((campsite) => campsite.name === name);
};
