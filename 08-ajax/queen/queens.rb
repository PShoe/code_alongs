require 'pry'
class Queens
  def initialize(queens_position = {white: [0, 3], black: [7, 3]})
    @queen_white = queens_position[:white] # [3,7]
    @queen_black = queens_position[:black] # [6,1]
    raise ArgumentError if @queen_white == @queen_black
    @board = [
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0']
    ]
    @board[@queen_white.first][@queen_white.last] = "W"
    @board[@queen_black.first][@queen_black.last] = "B"
  end
  def white
      @board.each_with_index do |row, index|
        if row.include? "W"
          @row = index
          @column = row.index "W"
        end
      end
      [@queen_white.first, @queen_white.last]
    end
    def black
      @board.each_with_index do |row, index|
        if row.include? "B"
          @row = index
          @column = row.index "B"
        end
      end
      [@queen_black.first, @queen_black.last]
      @board
    end
    def to_s
      board = @board.join(" ") + " "
      board = board.scan(/.{16}/)
      board = board.map do |row|
        row[15] = "\n"
        row
      end
      board.join("").chomp
    end
    def attack?
      if @queen_white.first == @queen_black.first
        true
      elsif @queen_white.last == @queen_black.last
        true
      elsif @queen_white.first == @queen_white.last && @queen_black.first == @queen_black.last
        true
      elsif (@queen_white.first - @queen_black.first) == (@queen_white.last - @queen_black.last)
        true
      end
end
 binding.pry
