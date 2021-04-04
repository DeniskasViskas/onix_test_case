import React from "react";
import PropTypes from "prop-types";

function TabsContent({data}) {
    return (
        <div key={data.id} className={"tab-pane "+(data.active ? 'active show' : '')} id={"tab_"+data.id} role="tabpanel">
            <div dangerouslySetInnerHTML={{__html: data.content}} />
        </div>
    )
}
TabsContent.propTypes = {
    data: PropTypes.object
};
export default TabsContent;