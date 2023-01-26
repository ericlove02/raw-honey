const axios = require("axios");
const cheerio = require("cheerio");

const fetchTitles = async () => {
    try {
        const response = await axios.get('https://old.reddit.com/r/movies/');

        const html = response.data;

        const $ = cheerio.load(html);

        const titles = [];

        $('div > p.title > a').each((_idx, el) => {
            const title = $(el).text()
            titles.push(title)
        });
        return titles;
    } catch (error) {
        throw error;
    }
};

fetchTitles().then((info) => console.log(info));