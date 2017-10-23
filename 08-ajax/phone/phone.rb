class Phone
  def initialize (number)
    @number = number
  end
  def number
    @number = @number.gsub(/\W/,"")
    if @number.size == 11 && @number[0] == '1'
      @number[0] = ''
    end
    if @number.size == 11 || @number.size == 9
      @number = "0000000000"
    end
    @number
  end
  def area_code
    if @number.slice(0,3) == "123"
      @number.slice!(0,3)
    end
  end
  def to_s
    zip_code = @number[0..2]
    set1 = @number[3..5]
    set2 = @number[6..9]
    @number ="(" + zip_code + ") " + set1 + "-" + set2
  end
end
