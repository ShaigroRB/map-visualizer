//#region ------ Variables ---------

let mapObjList = [];
let currFileContents = [];
let mapData = '';

//#region DOM elements

const detailsMapContainer = document.getElementById('details-map-container');
const mapViewer = document.getElementById('map-viewer');
const divCheckboxesVisibility = document.getElementById('div-checkboxes-visibility');

//#endregion

//#endregion

//#region ------- Functions ---------

function changeContainerFlexDirection() {
    const isRowContainer = detailsMapContainer.className === 'row-container';
    detailsMapContainer.className = isRowContainer ? 'column-container' : 'row-container';
    document.getElementById('btn-details').innerText = isRowContainer ? 'Reduced width' : 'Full width';

    redrawChart(mapObjList, mapViewer, 630);
}

function readSingleFile(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        currFileContents = e.target.result.split('\n');
        mapData = currFileContents[3];
        mapObjList = getMapObjectsList(mapData);

        displayContents(currFileContents);
        redrawChart(mapObjList, mapViewer, 630);
    };
    reader.readAsText(file);
}

function displayContents(lines) {
    let element = document.getElementById('pre-file-content');
    let text = '';
    for (const line in lines) {
        if (line >= 3) {
            // pretty print the json objects
            text += JSON.stringify(JSON.parse(lines[line]), null, 2); + '\n';
        } else {
            text += lines[line] + '\n';
        }
    }
    element.textContent = text;
}

/**
 * Set visibility for map objects if there are of one of the assets' type
 * @param {MapObject[]} mapObjects List of HTML objects
 * @param {Assets[]} assets List of assets
 * @param {string} visibility
 */
function setVisibilityMapObjectsGivenAssets(mapObjects, assets, visibility) {
    mapObjects.forEach(item => {
        const isGivenAsset = assets.some(
            (asset) => item.ObjIndexID == asset
        );
        if (isGivenAsset) {
            document.getElementById(item.ObjID).setAttribute('visibility', visibility);
        }
    });
}

//#endregion

//#region  -------- Add event listeners & DOM objects when loading the page --------

document.getElementById('file-input').addEventListener('change', readSingleFile, false);

checkboxesInfo.forEach((info) => {
    const handleVisibility = (assets, visibility) => {
        setVisibilityMapObjectsGivenAssets(mapObjList, assets, visibility);
    }
    const checkbox = newCheckboxForVisibility(info, handleVisibility);
    const label = newLabelForCheckbox(checkbox);
    const div = document.createElement('div');

    div.appendChild(checkbox);
    div.appendChild(label);

    divCheckboxesVisibility.appendChild(div);
});

//#endregion