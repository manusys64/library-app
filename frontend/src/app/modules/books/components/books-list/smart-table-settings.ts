export const internalSettings = {
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
                name: 'custom_edit',
                title: `<i class="fa fa-edit"></i>`
            }
        ],
    },
    columns: {
        title: {
            title: 'Title',
        },
        author: {
            title: 'Author',
        },
        language: {
            title: 'Language',
        },
        publish_date: {
            title: 'Date of publish',
        },
        pages_number: {
            title: 'Number of pages',
        },
        isbn: {
            title: 'ISBN',
        },
        cover_link: {
            title: 'Link to cover',
        },
    }
};