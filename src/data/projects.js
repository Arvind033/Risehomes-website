import { referencePhotos } from './home.js'

export const designReferences = [
  { id: 'contemporary-home-exterior', title: 'Contemporary Home Exterior', category: 'Construction', image: referencePhotos.hero },
  { id: 'light-filled-living', title: 'Light-Filled Living Space', category: 'Interiors', image: referencePhotos.living },
  { id: 'garden-facing-home', title: 'Garden-Facing Home', category: 'Construction', image: referencePhotos.house },
  { id: 'connected-living-kitchen', title: 'Connected Living & Kitchen', category: 'Interiors', image: referencePhotos.openPlan },
  { id: 'timber-and-open-living', title: 'Timber Details & Open Living', category: 'Interiors', image: referencePhotos.details },
]

export const referenceCategories = ['All', ...new Set(designReferences.map((reference) => reference.category))]