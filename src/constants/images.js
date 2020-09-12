function createPhotoArrays(bobDimensions, tomDimensions, tomBobDimensions) {
    const tomPhotos = [];

    const bobPhotos = [];

    const tomBobPhotos = [];

    for (let i = 1; i <= 225; i++) {
        tomPhotos.push({ jpeg: require(`../images/Tom/tom${i}.jpeg`), webp: require(`../images/Tom/tom${i}.webp`), width: tomDimensions[i].width, height: tomDimensions[i].height });
        bobPhotos.push({ jpeg: require(`../images/Bob/bob${i}.jpeg`), webp: require(`../images/Bob/bob${i}.webp`), width: bobDimensions[i].width, height: bobDimensions[i].height });
        tomBobPhotos.push({ jpeg: require(`../images/TomBob/tombob${i}.jpeg`), webp: require(`../images/TomBob/tombob${i}.webp`), width: tomBobDimensions[i].width, height: tomBobDimensions[i].height })
    }
    return { tomPhotos, bobPhotos, tomBobPhotos }
}
function setDimensions() {
    let tomDimensions = {}
    for (let i = 1; i <= 225; i++) {
        switch (i) {
            case 1:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 14:
            case 20:
            case 91:
            case 112:
            case 204:
            case 205:
            case 206:
            case 207:
            case 208:
            case 214:
            case 215:
            case 216:
            case 217:
            case 218:
            case 219:
            case 220:
            case 221:
            case 222:
            case 225:
                tomDimensions[i] = { width: 640, height: 480 };
                break;
            default:
                tomDimensions[i] = { width: 480, height: 640 }
        }
    }
    let bobDimensions = {};
    for (let i = 1; i <= 225; i++) {
        switch (i) {
            case 40:
                bobDimensions[i] = { width: 461, height: 640 }
                break;
            case 38:
                bobDimensions[i] = { width: 472, height: 640 }
                break;
            case 10:
            case 11:
            case 19:
            case 23:
            case 26:
            case 37:
            case 76:
            case 80:
            case 82:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 106:
            case 107:
            case 175:
            case 176:
            case 205:
            case 209:
            case 210:
            case 211:
            case 212:
            case 213:
            case 214:
            case 215:
            case 223:
            case 224:
                bobDimensions[i] = { width: 640, height: 480 };
                break;
            case 27:
            case 206:
                bobDimensions[i] = { width: 640, height: 640 };
                break;
            case 102:
                bobDimensions[i] = { width: 637, height: 640 };
                break;
            case 194:
                bobDimensions[i] = { width: 640, height: 546 };
                break;
            case 22:
                bobDimensions[i] = { width: 482, height: 640 };
                break;
            case 30:
                bobDimensions[i] = { width: 640, height: 481 };
                break;
            case 33:
                bobDimensions[i] = { width: 481, height: 640 };
                break;
            default:
                bobDimensions[i] = { width: 480, height: 640 }
        }
    }
    const tomBobDimensions = {};
    for (let i = 1; i <= 225; i++) {
        switch (i) {
            case 2:
            case 3:
            case 6:
            case 14:
            case 15:
            case 16:
            case 17:
            case 23:
            case 26:
            case 29:
            case 30:
            case 31:
            case 35:
            case 36:
            case 37:
            case 44:
            case 45:
            case 50:
            case 56:
            case 57:
            case 59:
            case 60:
            case 61:
            case 83:
            case 84:
            case 86:
            case 97:
            case 99:
            case 100:
            case 101:
            case 102:
            case 105:
            case 106:
            case 107:
            case 108:
            case 113:
            case 118:
            case 120:
            case 121:
            case 123:
            case 124:
            case 126:
            case 127:
            case 139:
            case 142:
            case 144:
            case 151:
            case 152:
            case 158:
            case 159:
            case 179:
            case 180:
            case 181:
            case 183:
            case 193:
            case 194:
            case 197:
            case 198:
            case 204:
            case 205:
            case 206:
            case 207:
            case 208:
            case 209:
            case 215:
            case 216:
            case 217:
            case 218:
            case 219:
            case 220:
            case 221:
            case 222:
                tomBobDimensions[i] = { width: 640, height: 480 };
                break;
            case 98:
                tomBobDimensions[i] = { width: 640, height: 549 };
                break;
            default:
                tomBobDimensions[i] = { width: 480, height: 640 };
                break;
        }
    }
    return { bobDimensions, tomDimensions, tomBobDimensions }
}


const { bobDimensions, tomDimensions, tomBobDimensions } = setDimensions();

export const { tomPhotos, bobPhotos, tomBobPhotos } = createPhotoArrays(bobDimensions, tomDimensions, tomBobDimensions);

export function pickRandomPhotos(type, screenType) {
    const numberOfPhotos = screenType === 'large' ? 25 : screenType === 'small' ? 5 : 13;
    let photos = [[]];
    function isValidLayout(index, current, screenType = 'large') {
        const currentHeight = current.height, currentWidth = current.width;
        if (screenType === 'large') {
            return isValidLargeScreen(index, currentHeight, currentWidth);
        } else if (screenType === 'small') {
            return isValidSmallScreen(index, currentHeight, currentWidth);
        } else {
            return isValidMediumScreen(index, currentHeight, currentWidth);
        }

        function isValidSmallScreen(index, currentHeight, currentWidth) {
            switch (index) {
                case 1:
                case 2:
                    return true;
                case 5:
                    if (currentHeight === photos[1][1].height && currentWidth === photos[1][1].width) {
                        return true;
                    }
                    return false;
                case 3:
                case 4:
                    if (currentHeight === photos[2][1].height && currentWidth === photos[2][1].width) {
                        return true;
                    }
                    return false;
                default:
                    return false;
            }
        }

        function isValidLargeScreen(index, currentHeight, currentWidth) {
            switch (index) {
                case 25:
                    if (currentHeight === photos[1][1].height && currentWidth === photos[1][1].width) {
                        return true;
                    }
                    return false;
                case 3:
                case 4:
                case 22:
                case 23:
                case 24:
                    if (currentHeight === photos[2][1].height && currentWidth === photos[2][1].width) {
                        return true;
                    }
                    return false;
                case 6:
                case 7:
                case 8:
                case 9:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                    if (currentHeight === photos[5][1].height && currentWidth === photos[5][1].width) {
                        return true;
                    }
                    return false;
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    if (currentHeight === photos[10][1].height && currentWidth === photos[10][1].width) {
                        return true;
                    }
                    return false;
                case 1:
                case 2:
                case 5:
                case 10:
                    return true;
                default:
                    return false;
            }
        }

        function isValidMediumScreen(index, currentHeight, currentWidth) {
            switch (index) {
                case 1:
                case 2:
                case 5:
                    return true;
                case 13:
                    if (currentHeight === photos[1][1].height && currentWidth === photos[1][1].width) {
                        return true;
                    }
                    return false;
                case 3:
                case 4:
                case 10:
                case 11:
                case 12:
                    if (currentHeight === photos[2][1].height && currentWidth === photos[2][1].width) {
                        return true;
                    }
                    return false;
                case 6:
                case 7:
                case 8:
                case 9:
                    if (currentHeight === photos[5][1].height && currentWidth === photos[5][1].width) {
                        return true;
                    }
                    return false;
                default:
                    return false;
            }
        }
    }
    for (let i = 1; i <= numberOfPhotos; i++) {
        let index = Math.floor(Math.random() * (225 - 1) + 1);
        let isValid = isValidLayout(i, type[index], screenType);
        if (isValid) {
            photos.push([i, type[index]])
        } else {
            index = Math.floor(Math.random() * (225 - 1) + 1);
            let invalid = true;

            while (invalid) {
                index = Math.floor(Math.random() * (225 - 1) + 1);
                isValid = isValidLayout(i, type[index], screenType);
                if (isValid) {
                    invalid = false;
                    photos.push([i, type[index]])
                }
            }

        }
    }
    return photos.slice(1);
}


