import React, { useRef } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import "./listing.css";


const Listing = (props) => {

  const { footer } = props;
  const menu_toggle_el = useRef(null);
  const menu_content_el = useRef(null);
  const menu_footer_el = useRef(null);

  // clickOutsideRef(menu_content_el, menu_toggle_el);
  // clickOutsideRef(menu_footer_el, menu_toggle_el);


// useEffect(() => {
// console.log(menu_toggle_el.current);
// }, [menu_toggle_el])


  return (
    <div className="listing" style={{ marginTop: 4 }}  >
      {/* icon */}
      <Icon
        ref={menu_toggle_el}
        style={{
          borderRadius: "5px",
          marginLeft: -25,
        }}
        path={props.icon ? props.icon : mdiChevronDown}
        size={0.8}
      
        onClick={() => {
         
          menu_content_el.current.classList.toggle("actif");
          footer && menu_footer_el.current.classList.toggle("actif");
         document.getElementsByClassName("item ")
    
        }}
      />
      {/* content */}
      <div
        ref={menu_content_el}
        className="listing-item "
        onClick={() => {
          menu_content_el.current.classList.toggle("actif");
          footer && menu_footer_el.current.classList.toggle("actif");
        }}
      >
        {props.content &&
          props.content.map((item, index) => props.render(item, index))}
      </div>

      {/* footer */}
      {footer && (
        <div ref={menu_footer_el} className="footer-item ">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Listing;
