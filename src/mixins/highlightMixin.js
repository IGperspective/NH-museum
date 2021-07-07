export const highlightMixin = {
    props: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        news: Object
    },
    computed: {
        newsDate() {
          const date = this.news?.date ? new Date(this.news.date) : "";
          if (date) {
            return date.toUTCString().slice(0,16) + ' -'
          } else {
            return date;
          }
        }
      },
    filters: {
        dd_mm_yy (dateString) {
          const date = new Date(dateString)
          return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        }
      }  
}