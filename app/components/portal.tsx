// Open a portal
// To build this modal you will first need to build a helper component that creates a portal, which allows you to render a child component somewhere outside of the parent's document object model (DOM) branch while still allowing the parent component to manage it as if it were a direct child.
// Note: This portal will be important because it will allow you to render the modal in a location that does not have any inherited styles or positioning from a parent that could affect the positioning of the modal.

// app/components/portal.tsx

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

interface props {
	children: React.ReactNode;
	wrapperId: string;
}

// 1 A function is defined that generates a div with an id. That element is then attached to the document's body.
const createWrapper = (wrapperId: string) => {
	const wrapper = document.createElement("div");
	wrapper.setAttribute("id", wrapperId);
	document.body.appendChild(wrapper);
	return wrapper;
};

export const Portal: React.FC<props> = ({ children, wrapperId }) => {
	const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

	useEffect(() => {
		// 2 If an element with the provided id does not already exist, invoke the createWrapper function to create one.
		let element = document.getElementById(wrapperId);
		let created = false;

		if (!element) {
			created = true;
			element = createWrapper(wrapperId);
		}

		setWrapper(element);

		// 3 When the Portal component is un-mounted, this will destroy the element.
		return () => {
			if (created && element?.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	if (wrapper === null) return null;

	// 4 Creates a portal to the newly generated div.
	return createPortal(children, wrapper);
};
