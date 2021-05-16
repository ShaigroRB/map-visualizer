const checkboxesInfo = [
    {
        'name': 'walls',
        'assets': [Assets.WALL_TOOL],
        'defaultVisibility': true
    },
    {
        'name': 'blocks',
        'assets': [Assets.BLOCK_1X1, Assets.BLOCK_2X2, Assets.BLOCK_1X4, Assets.BLOCK_4X1],
        'defaultVisibility': true
    },
    {
        'name': 'platforms',
        'assets': [Assets.PLATFORM_TOOL],
        'defaultVisibility': true
    }
]

/**
 * Create a checkbox given some info
 * @param {{'name': string, 'assets': number[], 'defaultVisibility': boolean}} info 
 * @param {(assets: number[], visibility: boolean) => {}} handleVisibility
 * @returns A new checkbox
 */
 function newCheckboxForVisibility(info, handleVisibility) {
    const checkbox = document.createElement('input');
    checkbox.id = `checkbox-visibility-${info.name}`;
    checkbox.type = 'checkbox';
    checkbox.name = info.name;
    checkbox.checked = info.defaultVisibility;

    checkbox.addEventListener('click', (elm) => {
        const visibility = elm.target.checked ? 'visible' : 'hidden';
        handleVisibility(info.assets, visibility);
    });

    return checkbox
}

/**
 * Create a label associated to a checkbox
 * @param {HTMLElement} checkbox 
 */
function newLabelForCheckbox(checkbox) {
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = checkbox.name;

    return label;
}