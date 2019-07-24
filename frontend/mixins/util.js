

const funcs = {
    methods: {
        getDiffString(d1, d2) {
            let diff = Math.abs(d1 - d2)
            const day = 864e5
            const hour = 36e5
            const minute = 6e4
            const second = 1000
            var result = Math.trunc(diff / day)
            if (0 != result) return `${result} days ago`
            result = Math.trunc(diff / hour)
            if (0 != result) return `${result} hours ago`
            result = Math.trunc(diff / minute)
            if (0 != result) return `${result} minutes ago`
            return 'Just before'


        }
    }
}

export default funcs