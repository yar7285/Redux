/**
 * Created by Yaroslav on 28.12.2016.
 */
export default function delay(ms=1000) {
    return new Promise((resolve, reject) => {
       setTimeout(() => resolve(), ms)
    });
}
