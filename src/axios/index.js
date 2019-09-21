const axios = require('axios');
import dotenv from 'dotenv';
dotenv.config();
const baseURL = process.env.FAKE_REST_API;

let AUTHORIZED_HTTP_CLIENT;

async function axiosSetUp() {

    AUTHORIZED_HTTP_CLIENT = axios.create({
        baseURL: baseURL,
        timeout: 100000,
    });
}

/**
 * Get All Users
 */

 async function getUsers() {
     await axiosSetUp();
     try {
        const users = AUTHORIZED_HTTP_CLIENT.get(`${baseURL}users`);
        return users;
     } catch(error) {
         console.log('Error while fetching the user from fake API');
     }
 }

 /**
  * Get All Posts
  */

async function getPosts() {
    await axiosSetUp();
    try {
        const posts = AUTHORIZED_HTTP_CLIENT.get(`${baseURL}posts`);
        return posts;
    } catch (error) {
        console.log('Error while fetching the posts from fake API');
    }
}


/**
 * Get all comments
 */

async function getComments() {
    await axiosSetUp();
    try {
        const comments = AUTHORIZED_HTTP_CLIENT.get(`${baseURL}comments`);
        return comments;
    } catch (error) {
        console.log('Error while fetching the comments from fake API');
    }
}

/**
 * Get all albums
 */

async function getAlbums() {
    await axiosSetUp();
    try {
        const albums = AUTHORIZED_HTTP_CLIENT.get(`${baseURL}albums`);
        return albums;
    } catch (error) {
        console.log('Error while fetching the albums from fake API');
    }
}

/**
 * Get all photos
 */

async function getPhotos() {
    await axiosSetUp();
    try {
        const photos = AUTHORIZED_HTTP_CLIENT.get(`${baseURL}photos`);
        return photos;
    } catch (error) {
        console.log('Error while fetching the photos from fake API');
    }
}

/**
 * Get All todos
 */

async function getTodos() {
    await axiosSetUp();
    try {
        const todos = AUTHORIZED_HTTP_CLIENT.get(`${baseURL}todos`);
        return todos;
    } catch (error) {
        console.log('Error while fetching the todos from fake API');
    }
} 

module.exports = {
    getUsers,
    getPosts,
    getAlbums,
    getComments,
    getPhotos,
    getTodos
}
