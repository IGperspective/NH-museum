const formatSpacePartnersData = (dataObject) => {
    const ar = [];
    Object.entries(dataObject).forEach(
        ([partner, highlight]) => {
            ar.push({
                date: highlight.createdAt,
                description: highlight.info,
                partner: partner,
                image: highlight.image,
                name: highlight.name
            });
        }
    );
    return ar
}
export default formatSpacePartnersData