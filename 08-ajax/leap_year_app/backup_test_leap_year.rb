require_relative 'leap_year'

=begin
2016 true
2017 false
1997 false
1996 true
1900 false
2000 true
=end

# mini test library
def test(expected, actual, message)
  if expected == actual
    puts "#{message} - pass"
  else
    puts "#{message} - fail"
  end
end

# test as code, test cases
test true, LeapYear.check(2016), "testing year 2016"
test false, LeapYear.check(2017), "testing year 2017"
