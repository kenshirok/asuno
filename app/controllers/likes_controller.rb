class LikesController < ApplicationController
    before_action :authenticate_user!

    def show
      article = Article.find(params[:article_id])
      likes_satatus = current_user.hasliked?(article)
      render json { hasliked: likes_satatus }
    end 
  
    def create
      article = Article.find(params[:article_id])
      article.likes.create!(user_id: current_user.id)
      redirect_to article_path(article)
    end

    def destroy
        article = Article.find(params[:article_id])
        like = article.likes.find_by!(user_id: current_user.id)
    
        like.destroy!
        
        render json: { status: 'ok' }
      end
  end