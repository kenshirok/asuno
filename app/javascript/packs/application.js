// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { crsfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("trix")
require("@rails/actiontext")

import $ from 'jquery'
import axios from 'axios'

$('.show-comment-form').on('click', () => {
    $('.show-comment-form').addClass('hidden')
    $('.comment-text-area').removeClass('hidden')
  })

azios.get('/article/${articleId}/comments')
.then((response) => {
    const comments = response.data
    comments.forEach((comment) => {
        $
    })
})

document.addEventListener('DocumentLoaded', () => {
    $('.article_title').on('click'), () => {
        axios.get('/')
        .then((response) => {
            console.log(response)
        })

    }
})