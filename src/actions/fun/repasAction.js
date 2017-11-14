


export const repasAction = (items) => ({
    type: "SET_REPAS",
    items
});


export const repasPrefereAction = (item = {}) => ({
    type: "REPAS_PREFERE",
    item
});
