import React from "react";

const useFilterActions2 = (values, setvalues, group2, setgroup2) => {
    const handleGroup2Right = () => {
        setgroup2((prev) => [...prev, ...values]);
        setvalues([]);
    };
    const handleGroup2Left = () => {
        setvalues((prev) => [...prev, ...group2]);
        setgroup2([]);
    };
    const Selected2 = (e) => {
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
    const handleSelectedRight2 = () => {
        const selection = document.getSelection();
        if (!selection.anchorNode) return;

        if (
            selection.focusNode.parentElement.closest("div").className !=
            "parent2"
        )
            return;
        const range = selection.getRangeAt(0);
        if (range.cloneContents().childElementCount > 0) {
            range
                .cloneContents()
                .querySelectorAll("*")
                .forEach((e) => {
                    const el = values.indexOf(e.textContent);
                    const filter = values.splice(el, 1);

                    // console.log(e);
                    setgroup2((prev) => [...prev, ...filter]);
                });
        } else {
            const select = values.indexOf(
                range.commonAncestorContainer.parentNode.textContent
            );
            const filter = values.splice(select, 1);
            setgroup2((prev) => [...prev, ...filter]);
        }
    };
    const handleSelectedLeft2 = () => {
        const selection = document.getSelection();
        if (!selection.anchorNode) return;

        if (selection.focusNode.parentElement.closest("div").id != "parent2")
            return;
        const range = selection.getRangeAt(0);
        if (range.cloneContents().childElementCount > 0) {
            range
                .cloneContents()
                .querySelectorAll("*")
                .forEach((e) => {
                    const el = group2.indexOf(e.textContent);
                    const filter = group2.splice(el, 1);

                    // console.log(e);
                    setvalues((prev) => [...prev, ...filter]);
                });
        } else {
            const select = group2.indexOf(
                range.commonAncestorContainer.parentNode.textContent
            );
            const filter = group2.splice(select, 1);
            setvalues((prev) => [...prev, ...filter]);
        }
    };

    return {
        handleGroup2Left,
        handleGroup2Right,
        handleSelectedLeft2,
        handleSelectedRight2,
        Selected2,
    };
};

export default useFilterActions2;
