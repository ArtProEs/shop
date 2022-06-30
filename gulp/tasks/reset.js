//  npm i -D del - установка плагина
import del from 'del';

export const reset = () =>{     // удоляет папку результата
    return del(app.path.clean);
}