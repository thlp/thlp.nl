import React from "react";

const ItemLink = ({ item }) => (
    <div>
        {item.frontmatter.title}
    </div>
);

export default ItemLink;