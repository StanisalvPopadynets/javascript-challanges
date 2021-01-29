const safecracker = (initNum, arr) => {
    let tmp = initNum;
    const result = []
    for (let i = 0; i < 3; i++) {
        if(i % 2 == 0) {
            if(tmp - arr[i] < 0) {
                result.push(100 - (arr[i] - tmp))
                tmp = 100 - (arr[i] - tmp)
            } else {
                result.push(tmp - arr[i])
                tmp -= arr[i]
            }
        }
        else {
            result.push((tmp + arr[i]) % 100)
            tmp = (tmp + arr[i]) % 100
        }
    }
    return result
}