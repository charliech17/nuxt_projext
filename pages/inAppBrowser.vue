<template>
    <div>
        <h1>是否在app Browser <span style="color: blue">{{ judgeIsinApp }}</span></h1>
        <p>{{ nowBrowser }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nowBrowser: ''
            }
        },
        computed: {
            judgeIsinApp() {
                let isInAppBrowser = false

                const BROWSER = {
                    messenger: /\bFB[\w_]+\/(Messenger|MESSENGER)/,
                    facebook: /\bFB[\w_]+\//,
                    twitter: /\bTwitter/i,
                    line: /\bLine\//i,
                    instagram: /\bInstagram/i,
                };

                const useragent = navigator.userAgent;
                this.nowBrowser = useragent

                for(const eachBrowser in BROWSER) {
                    if(useragent.match(BROWSER[eachBrowser])) {
                        isInAppBrowser = true
                        return
                    }
                }

                return isInAppBrowser
            }
        }
    }
</script>