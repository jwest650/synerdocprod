import React, { useState } from "react";

export const useFilterActions = (values, setvalues, group1, setgroup1) => {
    const handleGroup1Right = () => {
        setgroup1((prev) => [...prev, ...values]);
        setvalues([]);
    };
    const handleGroup1Left = () => {
        setvalues((prev) => [...prev, ...group1]);
        setgroup1([]);
    };
    const Selected = (e) => {
        const val = e.target.id;
        if (e.target.id && e.target.id == val) {
            const el = e.target.parentNode.querySelectorAll("p");
            el.forEach((e) => {
                e.classList.remove("active");
            });
            e.target.classList.add("active");
        } else {
            const el = e.target.parentNode.querySelectorAll("p");

            el.forEach((e) => {
                e.classList.remove("active");
            });
        }
    };
    const handleSelectedRight = () => {
        const selection = document.getSelection();
        if (!selection.anchorNode) return;

        const range = selection.getRangeAt(0);
        if (range.cloneContents().childElementCount > 0) {
            range
                .cloneContents()
                .querySelectorAll("*")
                .forEach((e) => {
                    const el = values.indexOf(e.textContent);
                    const filter = values.splice(el, 1);

                    // console.log(e);
                    setgroup1((prev) => [...prev, ...filter]);
                });
        } else {
            const select = values.indexOf(
                range.commonAncestorContainer.parentNode.textContent
            );
            const filter = values.splice(select, 1);
            setgroup1((prev) => [...prev, ...filter]);
        }
    };
    const handleSelectedLeft = () => {
        const selection = document.getSelection();
        if (!selection.anchorNode) return;

        const range = selection.getRangeAt(0);
        if (range.cloneContents().childElementCount > 0) {
            range
                .cloneContents()
                .querySelectorAll("*")
                .forEach((e) => {
                    const el = group1.indexOf(e.textContent);
                    const filter = group1.splice(el, 1);

                    // console.log(e);
                    setvalues((prev) => [...prev, ...filter]);
                });
        } else {
            const select = group1.indexOf(
                range.commonAncestorContainer.parentNode.textContent
            );
            const filter = group1.splice(select, 1);
            setvalues((prev) => [...prev, ...filter]);
        }
    };

    return {
        handleGroup1Left,
        handleGroup1Right,
        handleSelectedLeft,
        handleSelectedRight,
        Selected,
    };
};
