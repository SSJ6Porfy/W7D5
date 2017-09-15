class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token!


  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if @user && BCrypt::Password.new(@user.password_digest).is_password?(password)
      return @user
    end
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
