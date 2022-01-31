# == Schema Information
#
# Table name: articles
#
#  id      :integer          not null, primary key
#  title   :string           not null
#  user_id :integer          not null
#
# Indexes
#
#  index_articles_on_user_id  (user_id)
#
require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
