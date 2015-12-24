require 'sinatra'
require 'sinatra/reloader'


get '/' do
  @next_question = "Do you have a test for that?"
  @yes = '/pass'
  @no = '/write_test'
  erb :next
end

get '/pass' do
 @next_question = "Does the test pass?"
 @yes = '/refactor'
 @no = '/pass_test'
 erb :next
end

get '/refactor' do
 @next_question = "Do you need to refactor?"
 @yes = '/do_refactor'
 @no = '/new_feature'
 erb :next
end

get '/do_refactor' do
 @next_question = "Refactor your code"
 @done = '/pass'
 erb :done
end

get '/new_feature' do
  @next_question = "Select new feature to implement"
  @done = '/'
  erb :done
end

get '/pass_test' do
  @next_question = "Write code to pass the test"
  @done = '/pass'
  erb :done
end

get '/write_test' do
  @next_question = "Write a test"
  @done = '/'
  erb :done
end
