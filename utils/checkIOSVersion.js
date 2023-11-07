function checkAPPIOSVersion() {
    var agent = window.navigator.userAgent,
    start = agent.indexOf( 'OS ' );
    if( ( agent.indexOf( 'iPhone' ) > -1 || agent.indexOf( 'iPad' ) > -1 ) && start > -1 ){
        return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    }
    return 0;
}

class Semver {
    constructor(major, minner, patch) {
        this.major = major;
        this.minner = minner;
        this.patch = patch;
    }

    toString() {
        return `${this.major}_${this.minner}_${this.patch}`;
    }
}

function isIOS() {
    const ua = navigator.userAgent;
    return ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPhone") > 0;
}

function getIOSSemever() {
    if (isIOS()) {
        const extract = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/) | navigator.userAgent.match(/OS \w+ (\d+)_(\d+)_?(\d+)?/);
        return new Semver(
            parseInt(extract[1] || 0, 10),
            parseInt(extract[2] || 0, 10),
            parseInt(extract[3] || 0, 10)
        );
    } else {
        return null; // or [0,0,0]
    }
}


if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
    $('body').addClass('mac');
} else {
    $('body').addClass('pc');
}
// - exec
console.log(`overIOS9: ${isOverIOS9()}`);