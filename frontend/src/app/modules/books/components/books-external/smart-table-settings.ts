export const externalSettings = {
    pager: {
        per_Page: 25,
        display: true
    },
    actions: {
        add: false,
        edit: false,
        delete: false,
        custom: [
            {
                name: 'borrow',
                title: `<p>Borrow</p>`
            }
        ],
    },
    columns: {
        title: {
            title: 'Title',
            valuePrepareFunction: function (value, row, cell) {
                return row.volumeInfo.title
            }
        },
        author: {
            title: 'Author',
            valuePrepareFunction: function (value, row, cell) {
                return row.volumeInfo.authors
            },
            filter: false
        },
        language: {
            title: 'Language',
            valuePrepareFunction: function (value, row, cell) {
                return row.volumeInfo.language
            },
            filter: false
        },
        publish_date: {
            title: 'Date of publish',
            valuePrepareFunction: function (value, row, cell) {
                return row.volumeInfo.publishedDate
            },
            filter: false
        },
        pages_number: {
            title: 'Number of pages',
            valuePrepareFunction: function (value, row, cell) {
                return row.volumeInfo.pageCount
            },
            filter: false
        },
        isbn: {
            title: 'ISBN',
            valuePrepareFunction: function (value, row, cell) {
                const identifiers = row.volumeInfo.industryIdentifiers
                return identifiers ? identifiers.pop().identifier : ''
            },
            filter: false
        },
        cover_link: {
            title: 'Link to cover',
            valuePrepareFunction: function (value, row, cell) {
                const links = row.volumeInfo.imageLinks;
                return links ? links.thumbnail : ''
            },
            filter: false
        },
    }
};