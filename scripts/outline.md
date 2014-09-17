# Backbone Tutorial Outline

## 1. Backbone Overview

1. Intro to backbone.js
2. Models
3. Views
4. Collections
5. Routers & Events

## 2. Extending Backbone

1. Extending functionality
 - Simple example overriding Backbone.Model.sync for custom fetching
2. Creating a new Model class
 - Take the previous example and generalise it to a re-usable Model class
3. Using plugins
 - walk through of backplug.io, how to download and use a plugin
4. Creating a plugin
 - walk through of creating a plugin based on our new Model type
5. Modifying core Backbone.js
 - change the behaviour of Backbone.Model.sync to use cookies as an optional data store

## 3. Application Architecture

1. Application state objects
2. Routing and url-based state
3. Model validation
4. Using events

## 4. Advanced Views

1. Overview of Backbone.View
 - Walk through some of the code for Backbone.View and explain it
2. Templates with Mustache.js
3. Binding events and modyfying views
4. Performance and DOM thrashing
5. Extending Backbone.View to use Mustache templates 
6. Using Sass for styles

## 5. Advanced Models

1. Overview of Backbone.Model
 - Walk through the Backbone.Model source code
2. Meta-collections
 - extending Backbone.Collection to combine different sources of data
3. Using different data sources
 - using localStorage with Backbone Models
4. Alternate sync models
 - localStorage + webSockets for real-time updates

## 6. Marionette

Create a simple Todo list app using Marionette.

1. Overview of Marionette
 - what is it, how does it improve on backbone.js, what are the main components
2. Behaviors
 - Example of creating a reusable Behavior mixin - an error message popup.
3. Regions
 - Example using a region to manage several views to create a larger component - a todo list item.
4. CollectionView
 - Using a CollectionView to render all the todo list items. 
5. LayoutView
 - Structuring our example application's layout with a LayoutView.

## 7. Testing

1. Using Mocha.js as a test runner
2. Unit tests with Jasmine and Chai
3. Test data sources
 - running backbone tests without a server
4. Run-time assertions
 - verifying class dependencies at run-time

## 8. Build systems

1. Gulp.js
2. Browserify and npm/require
3. Production and development setups
 - use of minify
4. Grasp.js for custom modifications
 - example using grasp to comment out run-time assertions

