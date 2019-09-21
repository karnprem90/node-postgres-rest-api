import cors from 'cors';
import parser from 'body-parser';

export const handleRequestBodyParsing = (app) => {
    app.use(parser.urlencoded({
        extended: true
    }));
    app.use(parser.json());
}

export const handleCors = (app) => {
    app.use(cors({
        credentials: true,
        origin: true
    }));
}