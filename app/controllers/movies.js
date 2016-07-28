import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  actions: {
    nextPage() {
      if (this.page < 10) {
        this.set('page', (this.page + 1));
        }
      },
    prevPage() {
      if (this.page > 1) {
        this.set('page', (this.page - 1));
      }
    },
    handleClick(event) {
      event.preventDefault()


    }
  }
});

$(document).ready(function () {
  console.log('ready!')

  $('.controls button').on('click', handleClick)
})

function handleClick(event) {
  event.preventDefault()
  let currentPage = $('#songs').data('current-page')

  getPage(currentPage + 1)
}

function getPage(pageNumber) {
  $.ajax('http://localhost:3000/songs', {
    type: 'GET',
    data: {
      page: pageNumber
    }
  }).done(function (data, statusCode, hxrGarbage) {
    console.log("Data is data", data)

    $('#songs').html('')

    for (let item of data) {
      $('#songs').append(makeSongDiv(item))
    }

    $('#songs').data('current-page', pageNumber)
  })
}

function makeSongDiv(data) {
  let item = $('<li></li>').addClass('song')
  let title = '<em>' + data.title + '</em>'

  return item.html(data.artist + ', ' + title + ', ' + data.year)
}
